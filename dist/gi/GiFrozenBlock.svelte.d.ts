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
export type GiFrozenBlockProps = typeof __propDef.props;
export type GiFrozenBlockEvents = typeof __propDef.events;
export type GiFrozenBlockSlots = typeof __propDef.slots;
export default class GiFrozenBlock extends SvelteComponentTyped<GiFrozenBlockProps, GiFrozenBlockEvents, GiFrozenBlockSlots> {
}
export {};
