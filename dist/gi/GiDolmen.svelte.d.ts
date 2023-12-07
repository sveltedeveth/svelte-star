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
export type GiDolmenProps = typeof __propDef.props;
export type GiDolmenEvents = typeof __propDef.events;
export type GiDolmenSlots = typeof __propDef.slots;
export default class GiDolmen extends SvelteComponentTyped<GiDolmenProps, GiDolmenEvents, GiDolmenSlots> {
}
export {};
