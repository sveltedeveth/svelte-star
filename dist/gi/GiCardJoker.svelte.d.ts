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
export type GiCardJokerProps = typeof __propDef.props;
export type GiCardJokerEvents = typeof __propDef.events;
export type GiCardJokerSlots = typeof __propDef.slots;
export default class GiCardJoker extends SvelteComponentTyped<GiCardJokerProps, GiCardJokerEvents, GiCardJokerSlots> {
}
export {};
