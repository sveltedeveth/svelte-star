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
export type TiCodeProps = typeof __propDef.props;
export type TiCodeEvents = typeof __propDef.events;
export type TiCodeSlots = typeof __propDef.slots;
export default class TiCode extends SvelteComponentTyped<TiCodeProps, TiCodeEvents, TiCodeSlots> {
}
export {};
