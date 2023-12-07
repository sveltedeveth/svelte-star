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
export type IoIosPhotosProps = typeof __propDef.props;
export type IoIosPhotosEvents = typeof __propDef.events;
export type IoIosPhotosSlots = typeof __propDef.slots;
export default class IoIosPhotos extends SvelteComponentTyped<IoIosPhotosProps, IoIosPhotosEvents, IoIosPhotosSlots> {
}
export {};
