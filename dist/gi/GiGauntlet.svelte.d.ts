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
export type GiGauntletProps = typeof __propDef.props;
export type GiGauntletEvents = typeof __propDef.events;
export type GiGauntletSlots = typeof __propDef.slots;
export default class GiGauntlet extends SvelteComponentTyped<GiGauntletProps, GiGauntletEvents, GiGauntletSlots> {
}
export {};
