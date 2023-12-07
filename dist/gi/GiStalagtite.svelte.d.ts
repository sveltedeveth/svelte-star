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
export type GiStalagtiteProps = typeof __propDef.props;
export type GiStalagtiteEvents = typeof __propDef.events;
export type GiStalagtiteSlots = typeof __propDef.slots;
export default class GiStalagtite extends SvelteComponentTyped<GiStalagtiteProps, GiStalagtiteEvents, GiStalagtiteSlots> {
}
export {};
