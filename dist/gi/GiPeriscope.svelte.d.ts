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
export type GiPeriscopeProps = typeof __propDef.props;
export type GiPeriscopeEvents = typeof __propDef.events;
export type GiPeriscopeSlots = typeof __propDef.slots;
export default class GiPeriscope extends SvelteComponentTyped<GiPeriscopeProps, GiPeriscopeEvents, GiPeriscopeSlots> {
}
export {};
