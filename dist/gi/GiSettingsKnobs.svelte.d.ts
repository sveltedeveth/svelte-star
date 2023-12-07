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
export type GiSettingsKnobsProps = typeof __propDef.props;
export type GiSettingsKnobsEvents = typeof __propDef.events;
export type GiSettingsKnobsSlots = typeof __propDef.slots;
export default class GiSettingsKnobs extends SvelteComponentTyped<GiSettingsKnobsProps, GiSettingsKnobsEvents, GiSettingsKnobsSlots> {
}
export {};
