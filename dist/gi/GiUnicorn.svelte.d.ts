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
export type GiUnicornProps = typeof __propDef.props;
export type GiUnicornEvents = typeof __propDef.events;
export type GiUnicornSlots = typeof __propDef.slots;
export default class GiUnicorn extends SvelteComponentTyped<GiUnicornProps, GiUnicornEvents, GiUnicornSlots> {
}
export {};
