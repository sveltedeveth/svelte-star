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
export type MdRouterProps = typeof __propDef.props;
export type MdRouterEvents = typeof __propDef.events;
export type MdRouterSlots = typeof __propDef.slots;
export default class MdRouter extends SvelteComponentTyped<MdRouterProps, MdRouterEvents, MdRouterSlots> {
}
export {};
