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
export type GiBreastplateProps = typeof __propDef.props;
export type GiBreastplateEvents = typeof __propDef.events;
export type GiBreastplateSlots = typeof __propDef.slots;
export default class GiBreastplate extends SvelteComponentTyped<GiBreastplateProps, GiBreastplateEvents, GiBreastplateSlots> {
}
export {};
