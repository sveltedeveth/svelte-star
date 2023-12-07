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
export type GiLoveLetterProps = typeof __propDef.props;
export type GiLoveLetterEvents = typeof __propDef.events;
export type GiLoveLetterSlots = typeof __propDef.slots;
export default class GiLoveLetter extends SvelteComponentTyped<GiLoveLetterProps, GiLoveLetterEvents, GiLoveLetterSlots> {
}
export {};
