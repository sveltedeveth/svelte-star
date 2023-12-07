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
export type GoLinkProps = typeof __propDef.props;
export type GoLinkEvents = typeof __propDef.events;
export type GoLinkSlots = typeof __propDef.slots;
export default class GoLink extends SvelteComponentTyped<GoLinkProps, GoLinkEvents, GoLinkSlots> {
}
export {};
