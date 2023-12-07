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
export type FaRouteProps = typeof __propDef.props;
export type FaRouteEvents = typeof __propDef.events;
export type FaRouteSlots = typeof __propDef.slots;
export default class FaRoute extends SvelteComponentTyped<FaRouteProps, FaRouteEvents, FaRouteSlots> {
}
export {};
