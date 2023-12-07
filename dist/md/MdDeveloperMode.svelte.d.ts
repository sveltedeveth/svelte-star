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
export type MdDeveloperModeProps = typeof __propDef.props;
export type MdDeveloperModeEvents = typeof __propDef.events;
export type MdDeveloperModeSlots = typeof __propDef.slots;
export default class MdDeveloperMode extends SvelteComponentTyped<MdDeveloperModeProps, MdDeveloperModeEvents, MdDeveloperModeSlots> {
}
export {};
