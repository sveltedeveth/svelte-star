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
export type GiHandBandageProps = typeof __propDef.props;
export type GiHandBandageEvents = typeof __propDef.events;
export type GiHandBandageSlots = typeof __propDef.slots;
export default class GiHandBandage extends SvelteComponentTyped<GiHandBandageProps, GiHandBandageEvents, GiHandBandageSlots> {
}
export {};
