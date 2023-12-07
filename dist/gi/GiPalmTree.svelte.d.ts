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
export type GiPalmTreeProps = typeof __propDef.props;
export type GiPalmTreeEvents = typeof __propDef.events;
export type GiPalmTreeSlots = typeof __propDef.slots;
export default class GiPalmTree extends SvelteComponentTyped<GiPalmTreeProps, GiPalmTreeEvents, GiPalmTreeSlots> {
}
export {};
