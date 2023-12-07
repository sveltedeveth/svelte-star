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
export type GiConvictProps = typeof __propDef.props;
export type GiConvictEvents = typeof __propDef.events;
export type GiConvictSlots = typeof __propDef.slots;
export default class GiConvict extends SvelteComponentTyped<GiConvictProps, GiConvictEvents, GiConvictSlots> {
}
export {};
