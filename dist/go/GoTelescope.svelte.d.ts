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
export type GoTelescopeProps = typeof __propDef.props;
export type GoTelescopeEvents = typeof __propDef.events;
export type GoTelescopeSlots = typeof __propDef.slots;
export default class GoTelescope extends SvelteComponentTyped<GoTelescopeProps, GoTelescopeEvents, GoTelescopeSlots> {
}
export {};
