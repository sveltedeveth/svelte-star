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
export type GiRugbyConversionProps = typeof __propDef.props;
export type GiRugbyConversionEvents = typeof __propDef.events;
export type GiRugbyConversionSlots = typeof __propDef.slots;
export default class GiRugbyConversion extends SvelteComponentTyped<GiRugbyConversionProps, GiRugbyConversionEvents, GiRugbyConversionSlots> {
}
export {};
