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
export type GiOldLanternProps = typeof __propDef.props;
export type GiOldLanternEvents = typeof __propDef.events;
export type GiOldLanternSlots = typeof __propDef.slots;
export default class GiOldLantern extends SvelteComponentTyped<GiOldLanternProps, GiOldLanternEvents, GiOldLanternSlots> {
}
export {};
