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
export type FaGlassCheersProps = typeof __propDef.props;
export type FaGlassCheersEvents = typeof __propDef.events;
export type FaGlassCheersSlots = typeof __propDef.slots;
export default class FaGlassCheers extends SvelteComponentTyped<FaGlassCheersProps, FaGlassCheersEvents, FaGlassCheersSlots> {
}
export {};
