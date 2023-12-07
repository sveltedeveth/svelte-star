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
export type GiBoarEnsignProps = typeof __propDef.props;
export type GiBoarEnsignEvents = typeof __propDef.events;
export type GiBoarEnsignSlots = typeof __propDef.slots;
export default class GiBoarEnsign extends SvelteComponentTyped<GiBoarEnsignProps, GiBoarEnsignEvents, GiBoarEnsignSlots> {
}
export {};
