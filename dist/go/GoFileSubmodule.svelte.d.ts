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
export type GoFileSubmoduleProps = typeof __propDef.props;
export type GoFileSubmoduleEvents = typeof __propDef.events;
export type GoFileSubmoduleSlots = typeof __propDef.slots;
export default class GoFileSubmodule extends SvelteComponentTyped<GoFileSubmoduleProps, GoFileSubmoduleEvents, GoFileSubmoduleSlots> {
}
export {};
