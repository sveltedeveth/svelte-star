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
export type GiBloodySwordProps = typeof __propDef.props;
export type GiBloodySwordEvents = typeof __propDef.events;
export type GiBloodySwordSlots = typeof __propDef.slots;
export default class GiBloodySword extends SvelteComponentTyped<GiBloodySwordProps, GiBloodySwordEvents, GiBloodySwordSlots> {
}
export {};
