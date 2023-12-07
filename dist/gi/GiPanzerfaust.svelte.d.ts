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
export type GiPanzerfaustProps = typeof __propDef.props;
export type GiPanzerfaustEvents = typeof __propDef.events;
export type GiPanzerfaustSlots = typeof __propDef.slots;
export default class GiPanzerfaust extends SvelteComponentTyped<GiPanzerfaustProps, GiPanzerfaustEvents, GiPanzerfaustSlots> {
}
export {};
