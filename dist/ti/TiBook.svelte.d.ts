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
export type TiBookProps = typeof __propDef.props;
export type TiBookEvents = typeof __propDef.events;
export type TiBookSlots = typeof __propDef.slots;
export default class TiBook extends SvelteComponentTyped<TiBookProps, TiBookEvents, TiBookSlots> {
}
export {};
