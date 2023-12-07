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
export type GoSettingsProps = typeof __propDef.props;
export type GoSettingsEvents = typeof __propDef.events;
export type GoSettingsSlots = typeof __propDef.slots;
export default class GoSettings extends SvelteComponentTyped<GoSettingsProps, GoSettingsEvents, GoSettingsSlots> {
}
export {};
