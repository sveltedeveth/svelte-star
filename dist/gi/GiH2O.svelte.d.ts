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
export type GiH2OProps = typeof __propDef.props;
export type GiH2OEvents = typeof __propDef.events;
export type GiH2OSlots = typeof __propDef.slots;
export default class GiH2O extends SvelteComponentTyped<GiH2OProps, GiH2OEvents, GiH2OSlots> {
}
export {};
