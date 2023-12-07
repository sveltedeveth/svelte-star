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
export type GiTongueProps = typeof __propDef.props;
export type GiTongueEvents = typeof __propDef.events;
export type GiTongueSlots = typeof __propDef.slots;
export default class GiTongue extends SvelteComponentTyped<GiTongueProps, GiTongueEvents, GiTongueSlots> {
}
export {};
