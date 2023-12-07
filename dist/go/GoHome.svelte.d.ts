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
export type GoHomeProps = typeof __propDef.props;
export type GoHomeEvents = typeof __propDef.events;
export type GoHomeSlots = typeof __propDef.slots;
export default class GoHome extends SvelteComponentTyped<GoHomeProps, GoHomeEvents, GoHomeSlots> {
}
export {};
