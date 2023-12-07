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
export type GiLilyPadsProps = typeof __propDef.props;
export type GiLilyPadsEvents = typeof __propDef.events;
export type GiLilyPadsSlots = typeof __propDef.slots;
export default class GiLilyPads extends SvelteComponentTyped<GiLilyPadsProps, GiLilyPadsEvents, GiLilyPadsSlots> {
}
export {};
