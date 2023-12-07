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
export type GoGraphProps = typeof __propDef.props;
export type GoGraphEvents = typeof __propDef.events;
export type GoGraphSlots = typeof __propDef.slots;
export default class GoGraph extends SvelteComponentTyped<GoGraphProps, GoGraphEvents, GoGraphSlots> {
}
export {};
