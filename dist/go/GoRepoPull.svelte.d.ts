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
export type GoRepoPullProps = typeof __propDef.props;
export type GoRepoPullEvents = typeof __propDef.events;
export type GoRepoPullSlots = typeof __propDef.slots;
export default class GoRepoPull extends SvelteComponentTyped<GoRepoPullProps, GoRepoPullEvents, GoRepoPullSlots> {
}
export {};
