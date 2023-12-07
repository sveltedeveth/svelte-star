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
export type GoThreeBarsProps = typeof __propDef.props;
export type GoThreeBarsEvents = typeof __propDef.events;
export type GoThreeBarsSlots = typeof __propDef.slots;
export default class GoThreeBars extends SvelteComponentTyped<GoThreeBarsProps, GoThreeBarsEvents, GoThreeBarsSlots> {
}
export {};
