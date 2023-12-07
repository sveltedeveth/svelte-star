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
export type GiMantrapProps = typeof __propDef.props;
export type GiMantrapEvents = typeof __propDef.events;
export type GiMantrapSlots = typeof __propDef.slots;
export default class GiMantrap extends SvelteComponentTyped<GiMantrapProps, GiMantrapEvents, GiMantrapSlots> {
}
export {};
