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
export type GoRepoPushProps = typeof __propDef.props;
export type GoRepoPushEvents = typeof __propDef.events;
export type GoRepoPushSlots = typeof __propDef.slots;
export default class GoRepoPush extends SvelteComponentTyped<GoRepoPushProps, GoRepoPushEvents, GoRepoPushSlots> {
}
export {};
