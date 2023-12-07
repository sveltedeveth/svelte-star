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
export type GiBlackBookProps = typeof __propDef.props;
export type GiBlackBookEvents = typeof __propDef.events;
export type GiBlackBookSlots = typeof __propDef.slots;
export default class GiBlackBook extends SvelteComponentTyped<GiBlackBookProps, GiBlackBookEvents, GiBlackBookSlots> {
}
export {};
