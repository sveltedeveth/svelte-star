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
export type GiParachuteProps = typeof __propDef.props;
export type GiParachuteEvents = typeof __propDef.events;
export type GiParachuteSlots = typeof __propDef.slots;
export default class GiParachute extends SvelteComponentTyped<GiParachuteProps, GiParachuteEvents, GiParachuteSlots> {
}
export {};
