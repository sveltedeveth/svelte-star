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
export type GiSmokeBombProps = typeof __propDef.props;
export type GiSmokeBombEvents = typeof __propDef.events;
export type GiSmokeBombSlots = typeof __propDef.slots;
export default class GiSmokeBomb extends SvelteComponentTyped<GiSmokeBombProps, GiSmokeBombEvents, GiSmokeBombSlots> {
}
export {};
