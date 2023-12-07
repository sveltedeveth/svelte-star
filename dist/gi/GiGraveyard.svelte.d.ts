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
export type GiGraveyardProps = typeof __propDef.props;
export type GiGraveyardEvents = typeof __propDef.events;
export type GiGraveyardSlots = typeof __propDef.slots;
export default class GiGraveyard extends SvelteComponentTyped<GiGraveyardProps, GiGraveyardEvents, GiGraveyardSlots> {
}
export {};
