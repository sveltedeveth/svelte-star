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
export type GiColiseumProps = typeof __propDef.props;
export type GiColiseumEvents = typeof __propDef.events;
export type GiColiseumSlots = typeof __propDef.slots;
export default class GiColiseum extends SvelteComponentTyped<GiColiseumProps, GiColiseumEvents, GiColiseumSlots> {
}
export {};
