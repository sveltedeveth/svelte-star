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
export type GiSnakeTongueProps = typeof __propDef.props;
export type GiSnakeTongueEvents = typeof __propDef.events;
export type GiSnakeTongueSlots = typeof __propDef.slots;
export default class GiSnakeTongue extends SvelteComponentTyped<GiSnakeTongueProps, GiSnakeTongueEvents, GiSnakeTongueSlots> {
}
export {};
