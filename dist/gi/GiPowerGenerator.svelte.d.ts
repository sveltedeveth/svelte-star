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
export type GiPowerGeneratorProps = typeof __propDef.props;
export type GiPowerGeneratorEvents = typeof __propDef.events;
export type GiPowerGeneratorSlots = typeof __propDef.slots;
export default class GiPowerGenerator extends SvelteComponentTyped<GiPowerGeneratorProps, GiPowerGeneratorEvents, GiPowerGeneratorSlots> {
}
export {};
