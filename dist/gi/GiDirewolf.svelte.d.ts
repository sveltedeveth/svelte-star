import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GiDirewolfProps = typeof __propDef.props;
export type GiDirewolfEvents = typeof __propDef.events;
export type GiDirewolfSlots = typeof __propDef.slots;
export default class GiDirewolf extends SvelteComponentTyped<GiDirewolfProps, GiDirewolfEvents, GiDirewolfSlots> {
}
export {};
