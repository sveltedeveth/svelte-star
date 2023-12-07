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
export type GiSnakeBiteProps = typeof __propDef.props;
export type GiSnakeBiteEvents = typeof __propDef.events;
export type GiSnakeBiteSlots = typeof __propDef.slots;
export default class GiSnakeBite extends SvelteComponentTyped<GiSnakeBiteProps, GiSnakeBiteEvents, GiSnakeBiteSlots> {
}
export {};
