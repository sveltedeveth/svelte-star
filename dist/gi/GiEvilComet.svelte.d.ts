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
export type GiEvilCometProps = typeof __propDef.props;
export type GiEvilCometEvents = typeof __propDef.events;
export type GiEvilCometSlots = typeof __propDef.slots;
export default class GiEvilComet extends SvelteComponentTyped<GiEvilCometProps, GiEvilCometEvents, GiEvilCometSlots> {
}
export {};
