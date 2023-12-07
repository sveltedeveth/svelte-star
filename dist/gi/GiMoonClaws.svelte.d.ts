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
export type GiMoonClawsProps = typeof __propDef.props;
export type GiMoonClawsEvents = typeof __propDef.events;
export type GiMoonClawsSlots = typeof __propDef.slots;
export default class GiMoonClaws extends SvelteComponentTyped<GiMoonClawsProps, GiMoonClawsEvents, GiMoonClawsSlots> {
}
export {};
