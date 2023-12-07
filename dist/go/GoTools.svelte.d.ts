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
export type GoToolsProps = typeof __propDef.props;
export type GoToolsEvents = typeof __propDef.events;
export type GoToolsSlots = typeof __propDef.slots;
export default class GoTools extends SvelteComponentTyped<GoToolsProps, GoToolsEvents, GoToolsSlots> {
}
export {};
