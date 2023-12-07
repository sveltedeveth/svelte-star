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
export type GiDuckProps = typeof __propDef.props;
export type GiDuckEvents = typeof __propDef.events;
export type GiDuckSlots = typeof __propDef.slots;
export default class GiDuck extends SvelteComponentTyped<GiDuckProps, GiDuckEvents, GiDuckSlots> {
}
export {};
